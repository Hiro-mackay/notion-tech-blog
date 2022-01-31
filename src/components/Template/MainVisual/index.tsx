export const MainVisual = () => {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 100,
        overflow: 'hidden',
        marginTop: 57,
        color: '#ffffff'
      }}
    >
      <h2>Acompany Tech Blog</h2>
      <p>Secure computing, MPC, Encrypt...</p>
      <img
        src="https://www.notion.so/images/page-cover/gradients_3.png"
        style={{
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
        alt=""
      />
    </div>
  );
};
