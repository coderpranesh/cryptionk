const Description = () => {
  return (
    <>
      <div
        style={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "90%", 
          maxWidth: "946px", 
          height: "auto", 
          margin: "auto",
          borderRadius: "8px",
          padding: "20px", 
          marginTop: "148px",
          marginBottom: "50px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "56px", 
            fontWeight: "540",
            lineHeight: "1.2", 
            marginBottom: "30px",
          }}
          className="text-[1.5rem] lg:text-[4.5rem]"
        >
          <div>Swap your currency seamlessly.</div>
          <div>Bring together your wallets.</div>
          <div>See your digital collectibles.</div>
          <div>Say hello to the new way to crypto.</div>
        </div>
        <div>
          <button
            className="bg-gradient-to-r from-[#8C3035] to-[#D17561] text-white 
    border-none rounded-full 
    px-8 py-3 text-[18px] font-medium cursor-pointer 
    w-[175px] h-[50px] leading-[26.63px] 
    lg:w-[201px] lg:h-[55px] lg:text-[22px] 
  "
          >
            Swap Crypto
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
