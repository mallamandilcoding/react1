import React from 'react'

const MenuCard = ({menuData}) => {
  return (
  <>
  <section className="main-card--cointainer">
    {menuData.map((menu)=>{
      return (
        <>
          <div className="card-container" key={menu.id}>
            <div className="card ">
              <div className="card-body">
                <span className="card-number card-circle subtle">{menu.id}</span>
                <span className="card-author subtle"> {menu.category}</span>
                <h2 className="card-title"> {menu.name} </h2>
                <span className="card-description subtle">
                  {menu.description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={menu.image} alt="images" className="card-media" />

              <span className="card-tag  subtle">Order Now</span>
            </div>
          </div>
        </>
      );
    })}
  </section>
  </>
  );
}

export default MenuCard
