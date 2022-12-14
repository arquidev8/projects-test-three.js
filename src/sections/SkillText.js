const SkillText = () => {
  const getSpans = (text) => {
    let spans = [];
    for (let i = 0; i < text.length; i++) {
      spans.push(
        <span className="t" key={i.toString()}>
          {text[i]}
        </span>
      );
    }
    return spans;
  };
  return (
    <section className="skill-text">
      <h1 className="skill-title">
        {getSpans("Skills &").map((e) => e)} <br />
        {getSpans("Experience").map((e) => e)}
      </h1>
      <div className="skill-contents">
      I'm a passionate programmer, who is always looking for new challenges to improve myself,  
      who is always ready to learn new things and help others.
        <br />
        <br />I love to work with JavaScript, React, Vue, Angular, Html and
        Css. I also have experience with WebGl. many other.
        
      </div>
    </section>
  );
};

export default SkillText;
