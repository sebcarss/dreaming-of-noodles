export default function Method({ postData }) {
  const instructions = postData.instructions;
  const instructionsList = instructions.map(function (instruction, index) {
    return <li key={index}>{instruction}</li>;
  });

  return (
    <div>
      <h2>Method</h2>
      <ol>{instructionsList}</ol>
    </div>
  );
}
