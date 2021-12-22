const CONTRACT_ADDRESS = '0x46a65b21a7290c0409462c71f5A2E0f349d1BB01';

const TWITTER_HANDLE = "jovanjester";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };

export { CONTRACT_ADDRESS, transformCharacterData, TWITTER_HANDLE, TWITTER_LINK };
