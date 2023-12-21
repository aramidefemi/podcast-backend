// __server_tests__/server.test.js
const request = require('supertest');
const server = require('../server/server.js');

// Test data for music
const musicData = {
  title: 'Awesome Song',
  description: 'A great song for testing',
  subtitle: 'Test Song',
  authorEmail: 'author@example.com',
  authorFullName: 'John Doe',
};

// Test data for podcast
const podcastData = {
  title: 'Amazing Podcast',
  description: 'An interesting podcast for testing',
  subtitle: 'Test Podcast',
  authorEmail: 'author@example.com',
  authorFullName: 'Jane Doe',
};

// Test data for prayer
const prayerData = {
  title: 'Healing Prayer',
  description: 'A prayer for health and well-being',
  subtitle: 'Test Prayer',
  authorEmail: 'author@example.com',
  authorFullName: 'James Smith',
};

// Test data for poetry
const poetryData = {
  title: 'Beautiful Poem',
  description: 'A lovely poem for testing',
  subtitle: 'Test Poem',
  authorEmail: 'author@example.com',
  authorFullName: 'Emily Johnson',
};

describe('API Tests', () => {
  it('should save music data', async () => {
    const response = await request(server)
      .post('/api/music')
      .send(musicData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Music playlist data saved successfully');
  });

  it('should save podcast data', async () => {
    const response = await request(server)
      .post('/api/podcast')
      .send(podcastData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Podcast playlist data saved successfully');
  });

  it('should save prayer data', async () => {
    const response = await request(server)
      .post('/api/prayer')
      .send(prayerData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Prayer request data saved successfully');
  });

  it('should save poetry data', async () => {
    const response = await request(server)
      .post('/api/poetry')
      .send(poetryData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Poetry playlist data saved successfully');
  });

  it('should retrieve a list of music records', async () => {
    const response = await request(server).get('/api/music');
    const music = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(music)).toBe(true);
  });

  it('should retrieve a list of podcast records', async () => {
    const response = await request(server).get('/api/podcast');
    const podcasts = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(podcasts)).toBe(true);
  });

  it('should retrieve a list of prayer records', async () => {
    const response = await request(server).get('/api/prayer');
    const prayers = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(prayers)).toBe(true);
  });

  it('should retrieve a list of poetry records', async () => {
    const response = await request(server).get('/api/poetry');
    const poetry = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(poetry)).toBe(true);
  });
});
