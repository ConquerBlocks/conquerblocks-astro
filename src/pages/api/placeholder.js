
export const GET = ({ params, request }) => {
    console.log(params, request);
    return new Response(
        JSON.stringify({
            greeting: 'Hello',
        }),
    )
}