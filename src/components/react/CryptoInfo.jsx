import { useEffect, useState } from "react";

const CryptoInfo = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setPrices([
          { name: "Bitcoin", price: data.bitcoin.usd },
          { name: "Ethereum", price: data.ethereum.usd },
        ]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchInfo();
    const interval = setInterval(fetchInfo, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Precios de Criptomonedas</h2>
      <ul>
        {prices.map((crypto) => (
          <li key={crypto.name}>
            {crypto.name}: ${crypto.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoInfo;
