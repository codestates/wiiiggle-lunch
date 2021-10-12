export default class Posts {
  constructor(client) {
    this.client = client;
  }

  // 평가 리스트 가져오기
  async getPosts(lastId, size) {
    const res = await this.client.get(
      `/posts?lastPostId=${lastId}&size=${size}`,
    );
    return res.data;
  }

  // 평가 등록하기
  async addPosts(payload, accessToken) {
    const res = await this.client.post(`/posts`, payload, {
      headers: { Authorization: `${accessToken}` },
    });
    return res.data;
  }

  // 평가 수정하기
  async updatePosts(id, payload, accessToken) {
    const res = await this.client.post(`/edit/${id}`, payload, {
      headers: { Authorization: `${accessToken}` },
    });
    return res.data;
  }

  // 평가 삭제하기
  async deletePosts(id, accessToken) {
    const res = await this.client.delete(`/posts/${id}`, {
      headers: { Authorization: `${accessToken}` },
    });
    return res.data;
  }
}
