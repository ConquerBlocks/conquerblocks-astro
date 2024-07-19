export const GET = async ({ params, request }) => {
    return new Response(
        JSON.stringify([
            { title: "Harry Potter y la piedra filosofal" },
            { title: "Elantris" },
            { title: "El templario" }
        ])
    )
}