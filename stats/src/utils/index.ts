export const getDateFromString = (input: string): Date => {
  const inputarry = input.split('/').map((val:string): number => { return parseInt(val)});

  return new Date(inputarry[2], inputarry[1] - 1, inputarry[0]);
}