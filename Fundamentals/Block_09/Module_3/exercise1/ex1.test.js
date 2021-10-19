const getRepos = require('./ex1');

describe('Verifying repository existence', () => {

  it('Verifying existence of sd-01-week4-5-project-todo-list', async () => {
    const allReps = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(allReps).toContain('sd-01-week4-5-project-todo-list');
  });

  it('Verifying existence of sd-01-week4-5-project-meme-generator', async () => {
    const allReps = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(allReps).toContain('sd-01-week4-5-project-meme-generator');
  });
});
