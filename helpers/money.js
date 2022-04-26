export default class {
  static format(number) {
    return `$${formatNumber(number)}`;
  }
}

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}
