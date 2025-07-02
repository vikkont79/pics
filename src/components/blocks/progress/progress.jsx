function Progress({ value, max }) {
  return (
    <div className="progress-wrapper">
      <div className="progress" style={{ width: `${(max - value) / max * 100}%` }}></div>
    </div>
  );
}

export { Progress };