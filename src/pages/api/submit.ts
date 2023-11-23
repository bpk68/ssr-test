import type { APIRoute, APIContext } from 'astro';

export const POST: APIRoute = async ({ request, redirect }: APIContext) => {
  const form = await request.formData();

  const formData = {
    name: form.get('name'),
    email: form.get('email'),
  };

  console.log('formData', formData);

  // Do something with the form data here.

  const redirectUrl = import.meta.env.PROD
    ? 'https://peaceful-figolla-a579e7.netlify.app/'
    : 'http://localhost:4321';

  return redirect(redirectUrl + '/thanks', 307);
};
