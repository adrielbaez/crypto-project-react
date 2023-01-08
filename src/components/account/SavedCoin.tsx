import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  if (coins.length === 0) {
    return (
      <div>
        <p>
          You don't have any coins saved. Please save a coin to add it to watch
          list.{" "}
          <Link to="/" className="text-accent">
            Click here to search coins
          </Link>
        </p>
      </div>
    );
  }
  return (
    <table className="w-full border-collapse text-center">
      <thead>
        <tr className="border-b">
          <th className="px-4">Rank #</th>
          <th className="text-left">Coin</th>
          <th className="text-left">Remove</th>
        </tr>
      </thead>
      <tbody>
        {/* {coins.map((coin, index) => (
          <tr key={coin?.id} className="h-[60px] overflow-hidden">
            <td>{coin?.rank}</td>
            <td>
              <Link to={`/coin/${coin?.id}`}>
                <div className="flex items-center">
                  <img
                    src={coin?.image}
                    alt={coin?.name}
                    className="w-8 mr-4"
                  />
                  <div>
                    <p className="hidden sm:table-cell">{coin?.name}</p>
                    <p className="text-gray-500 text-left text-sm">
                      {coin?.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            </td>
            <td className="pl-8">
              <AiOutlineClose className="cursor-pointer" />
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};
