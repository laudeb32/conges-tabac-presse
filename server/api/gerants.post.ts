import { CalendarDate } from "@internationalized/date";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { start, end } = body["Période"];

  const [startDate, endDate] = [start, end].map(({ year, month, day }) =>
    new CalendarDate(year, month, day).toString()
  );

  Object.assign(body, { Statut: "En attente", Début: startDate, Fin: endDate });

  delete body["Période"];

  await $fetch("https://app.nocodb.com/api/v2/tables/miw71x72sjo4382/records", {
    method: "POST",
    headers: { "xc-token": useRuntimeConfig().nocodb.apiToken },
    body,
  });
});
