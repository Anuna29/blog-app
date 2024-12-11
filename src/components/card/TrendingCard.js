import React from 'react'

export const TrendingCard = (props) => {
  const { blog, index } = props;

  return (
    <div 
                style={{
                  position: "relative",
                }}
                key={index}
              >
                <div style={{
                  position: "relative",
                  width: "290px",
                  height: "320px",
                  borderRadius:"12px",
                  backgroundImage: `url(${blog.imageURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(60%)"
                }}/>
                <div 
                  style={{
                    position: "absolute",
                    // color: "white",
                    left: 25,
                    top: 200,
                    display:"flex",
                    flexDirection: "column",
                    gap: "20px",
                    paddingRight: "25px",
                  }}>
                  <div>
                    <span 
                      style={{
                        backgroundColor: "#4B6BFB",
                        borderRadius: "6px",
                        padding: "4px 10px",
                        cursor: "pointer",
                      }}
                    >
                      {blog.tag.name}
                    </span>
                  </div>
                  <div 
                    style={{
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <h2 style={{fontSize:"18px"}}>{blog.title}</h2>
                  </div>
                </div>
              </div>
  )
}
