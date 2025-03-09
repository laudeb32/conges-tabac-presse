export default defineEventHandler(async (event) => {
  const { partnership, ...body } = await readBody(event);

  console.log(partnership, body);

  // const response = await $fetch(
  //   "https://app.nocodb.com/api/v2/tables/m1qkyxamhb50m71/records",
  //   {
  //     method: "POST",
  //     headers: { "xc-token": "9GIv4OxOKhBpZfPvyA3FtFXKpjm2550CiBsk_7S_" },
  //     body,
  //   }
  // );

  const { sendMail } = useNodeMailer();

  sendMail({
    to: "agenor.debriat@me.com",
    subject: partnership,
    text: `${body["Prénom"]} ${body["Nom"]} vient de prendre contact dans le but de devenir partenaire.`,
  });

  return {
    message: "Email envoyé",
  };

  // return response;
});
