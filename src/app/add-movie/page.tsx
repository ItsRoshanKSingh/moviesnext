import FormSubmitButton from "@/components/button/formSubmitButton";
import prisma from "@/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Add Movie",
};

async function addMovie(formData: FormData) {
    "use server"

    const genre = formData.get("genre")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const name = formData.get("name")?.toString();
    const overview = formData.get("overview")?.toString();
    const releaseDate = formData.get("releaseDate")?.toString() || ""
    const runtime = Number(formData.get("runtime"))
    const trailerUrl = formData.get("trailerUrl")?.toString();

    if (!genre || !imageUrl || !name || !overview || !runtime || !trailerUrl) {
        throw Error("Missing required fields");
    }

    await prisma.movie.create({
        data: {
            genre,
            imageUrl,
            name,
            overview,
            releaseDate,
            runtime,
            trailerUrl,
        },
    });

    redirect('/add-movie')
}


export default function AddProductPage() {
    return (
        <div className="flex justify-center py-3 px-10">
            <form action={addMovie}>
                <h1 className="mb-3 text-lg font-bold py-3">Add Movie</h1>
                <input
                    type="text"
                    required
                    name="name"
                    placeholder="Name"
                    className="input-bordered input mb-3 w-full"
                />
                <textarea
                    required
                    name="overview"
                    placeholder="overview"
                    className="textarea-bordered textarea mb-3 w-full"
                />
                <input
                    required
                    name="imageUrl"
                    placeholder="Image URL"
                    type="text"
                    className="input-bordered input mb-3 w-full"
                />
                <input
                    type="text"
                    required
                    name="trailerUrl"
                    placeholder="Trailer URL"
                    className="input-bordered input mb-3 w-full"
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre: Seperate multple with comma"
                    className="input-bordered input mb-3 w-full"
                    required
                />

                <input
                    type="text"
                    required
                    name="releaseYear"
                    className="input-bordered input mb-3 w-full"
                    placeholder="Release Year"
                    pattern="[0-9]{4}"
                    title="Enter a valid year (4 digits)"
                />

                <input
                    type="number"
                    required
                    name="runtime"
                    className="input-bordered input mb-3 w-full"
                    placeholder="Runtime"
                    defaultValue={2}
                />

                <FormSubmitButton className="btn-block">Add</FormSubmitButton>
            </form>
        </div>
    );
}