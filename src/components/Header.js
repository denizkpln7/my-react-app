import React from "react";

function Header({ money, total }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>$ {money - total}</span> paranız kaldı!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span>$ {money}</span> paranız var!
        </div>
      )}
    </>
  );
}

export default Header;
