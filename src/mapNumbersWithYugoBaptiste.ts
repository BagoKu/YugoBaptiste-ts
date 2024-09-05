export const YugoBaptiste = (entry: number) => {
  let result = '';

  if (entry === 1)
    return 'Thomas';

  if (entry % 3 === 0 || entry.toString().includes('3'))
    result += 'Yugo';
  if (entry % 5 === 0 || entry.toString().includes('5'))
    result += 'Baptiste';

  return result.length > 0 ? result : entry;
}

export const mapNumbersWithYugoBaptiste = (numbers: number[]) => {
  return numbers.map((number: number) => YugoBaptiste(number))
}
