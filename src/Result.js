import React from 'react';

const round = (value, places = 1) => {
  const multiplier = 10 ** places;
  return Math.round(value * multiplier) / multiplier;
}

const Result = (props) => {
  const {
    current,
    target,
    rate,
    timespan,
  } = props;
  if (current >= target) {
    return (
      <div>
        <span>Done!</span>
      </div>
    );
  }

  if (rate === 0) {
    return (
      <div>
        <span>Never</span>
      </div>
    );
  }

  const seconds = (target - current) / (rate / timespan);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return (
    <ul>
      <li>{round(seconds).toLocaleString()} seconds</li>
      <li>{round(minutes).toLocaleString()} minutes</li>
      <li>{round(hours).toLocaleString()} hours</li>
      <li>{round(days).toLocaleString()} days</li>
    </ul>
  );
}

export default Result;
