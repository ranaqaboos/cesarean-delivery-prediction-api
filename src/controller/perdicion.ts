export function upsertPerdictionController(perdictions: any[], newperdiction: any) {
    const perdicionIndex = perdictions.findIndex((el) => el.id === newperdiction.id);
    if (perdicionIndex === -1) {
      perdictions.push(newperdiction);
    } else {
      perdictions[perdicionIndex] = {
        ...perdictions[perdicionIndex],
        ...newperdiction,
      };
    }
    return perdictions;}
