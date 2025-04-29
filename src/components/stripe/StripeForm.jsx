"use client";
import { use, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "next/navigation";
const key =
  "pk_test_51PK0He04unNuiRnPvDvT74iZne9m2Oz2Ng7wI95phOySRxKOwBUGEu2eflEd5TscgzaXdtwkzcK5InSv41WWaq06009dryfRTE";
// Remplace par ta vraie clé publique
const stripePromise = loadStripe(key);

const DonationForm = () => {
  const [montant, setMontant] = useState(5);
  const [loading, setLoading] = useState(false);
  const [donateur, setDonateur] = useState("");
  const [commentaire, setCommentaire] = useState("");

  const { id } = useParams();

  const handleDonate = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/create-donation-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ montant, id_projet, donateur, commentaire }),
      });

      const data = await res.json();

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Erreur lors de la redirection :", error);
      alert("Une erreur est survenue !");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">💖 Faire un don</h2>

      <label className="block text-gray-700 text-sm mb-2">Nom </label>

      <input
        type="text"
        value={donateur}
        onChange={(e) => setDonateur(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Entrer votre nom(optionelle) "
      />

      <label className="block text-gray-700 text-sm mb-2">Montant </label>

      <input
        type="number"
        value={montant}
        onChange={(e) => setMontant(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        min={1}
      />
      <label className="block text-gray-700 text-sm mb-2">Commentaire </label>

      <textarea
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Laisser un commentaire (optionelle)"
        multiple
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        {loading ? "Redirection..." : `Donner ${montant} €`}
      </button>
    </div>
  );
};

export default DonationForm;
