function calculate() {
  const money = parseFloat(document.getElementById('money').value);
  const percentage = parseFloat(document.getElementById('percentage').value);
  const time = parseInt(document.getElementById('time').value);
  const type = document.getElementById('type').value;

  if (isNaN(money) || isNaN(percentage) || isNaN(time)) return;

  const rate = percentage / 100;
  const labels = [];
  const dataPoints = [];
  let currentBalance = 0;

  for (let i = 1; i <= time; i++) {
    labels.push('Duration ' + i);
    let val = (type === 'compound')
      ? money * Math.pow((1 + rate), i)
      : money + (money * rate * i);
    dataPoints.push(val.toFixed(2));
    if (i === time) currentBalance = val;
  }

  if (time <= 0) currentBalance = money;

  updateChart(labels, dataPoints);

  document.getElementById('finalResult').innerText = '$' + currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const totalReturnPercentage = ((currentBalance - money) / money * 100).toFixed(1);
  document.getElementById('profitTag').innerText = `+${totalReturnPercentage}% Total Return`;
}
