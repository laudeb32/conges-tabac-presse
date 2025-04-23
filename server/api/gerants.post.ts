import { CalendarDate } from "@internationalized/date";
import { FullForm } from "~/schemas/form";

export default defineEventHandler(async (event) => {
  const {
    Période: period,
    "Périodes de travail": workingPeriods,
    ...body
  } = await readBody<FullForm>(event);

  const [startDate, endDate] = [period.start, period.end].map(
    ({ year, month, day }) => new CalendarDate(year, month, day).toString()
  );

  Object.assign(body, {
    Statut: "En attente",
    Début: startDate,
    Fin: endDate,
    "Périodes de travail": Object.entries(workingPeriods)
      .map(
        ([day, periods]) =>
          `${day}: ${periods
            .map((period) => `${period.début} - ${period.fin}`)
            .join(", ")}`
      )
      .join("\n"),
  });

  await $fetch("https://app.nocodb.com/api/v2/tables/miw71x72sjo4382/records", {
    method: "POST",
    headers: { "xc-token": useRuntimeConfig().nocodb.apiToken },
    body,
  });
});
