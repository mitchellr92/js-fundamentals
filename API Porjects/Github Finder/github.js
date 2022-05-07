class Github {
  constructor() {
    this.client_id = "687b8ca805702a4e7657";
    this.client_secret = "ba973b56e4348866573ab958d3506cdee4542755";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
