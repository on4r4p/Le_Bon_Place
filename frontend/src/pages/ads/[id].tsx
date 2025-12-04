import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function AdDetail() {
    const router = useRouter();
    return (
        <Layout pageTitle={`Détails ${router.query.id}`}>
            <div className="p-4">Annonce numéro {router.query.id}</div>
        </Layout>
    );
}       