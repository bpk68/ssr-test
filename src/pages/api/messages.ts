import type { APIRoute } from 'astro';

const messages = [
  'Hello from the Messages API!',
  'Another welcome message here!',
  'This is the third message here!',
  'Almost one more for good luck',
  'A final message from the Messages API!',
];

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      message: messages[Math.floor(Math.random() * messages.length)],
    })
  );
};
