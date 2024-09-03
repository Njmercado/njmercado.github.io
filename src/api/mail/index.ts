const URL = process.env.NEXT_PUBLIC_SEND_EMAIL_LAMBDA_URL || ''
const TOKEN = process.env.NEXT_PUBLIC_SEND_EMAIL_LAMBDA_TOKEN || ''

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", TOKEN);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "subject": `Contact question - ${name}`,
      "name": name,
      "email": email,
      "message": message
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(URL, requestOptions);

    return response.status === 200
  } catch (error) {
    console.error('ERROR: ', error)
  }
}