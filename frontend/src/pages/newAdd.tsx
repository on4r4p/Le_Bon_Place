import Layout from "@/components/Layout";

export default function NewAdd() {
    return (
        <Layout pageTitle="Nouvelle Annonce">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-6">Créer une nouvelle annonce</h2>

                <form>
                    <div className="my-2">
                        <label htmlFor="name">Titre</label>
                        <input
                            type="text"
                            id="name"
                            name="title"
                            className="m-3 p-2 border"
                            required />
                    </div>


                    <button
                        type="submit"
                        className="p-2 bg-amber-600 hover:bg-amber-700 cursor-pointer text-white">
                        Save
                    </button>
                </form>
            </div>
        </Layout>
    );
}   
