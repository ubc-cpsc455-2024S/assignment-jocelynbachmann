import { expect } from 'chai';
import request from 'supertest';
import server from '../../index.js';
import Members from '../../models/memberSchema.js';
import { member1Data, member2Data, member3Data, incompleteMemberData } from '../data/membersData.js';

describe('Members', () => {
  beforeEach(async () => {
		await Members.deleteMany({});
		const member1 = new Members(member1Data);
		await member1.save();
		const member2 = new Members(member2Data);
		await member2.save();
	});

  describe('GET /members', () => {
    it('should get all members', async () => {
			const response = await request(server)
				.get('/members');
      expect(response.status).to.equal(200);
			expect(response.body).to.be.an('array');
			expect(response.body.length).to.equal(2);
			if (response.body[0].name == member1Data.name) {
				assertMember(response.body[0], member1Data);
				assertMember(response.body[1], member2Data);
			} else {
				assertMember(response.body[0], member2Data);
				assertMember(response.body[1], member1Data);
			}
		});

    it('should get no members', async () => {
      await Members.deleteMany({});
      const response = await request(server).get('/members');
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.equal(0);
    });
  });

  describe('POST /members', () => {
    it('should create a member', async () => {
      const response = await request(server).post('/members').send(member3Data);
      expect(response.status).to.equal(201);
    });

    it('should reject incomplete member', async () => {
      const response = await request(server).post('/members').send(incompleteMemberData);
      expect(response.status).to.equal(400);
    });
  });

  describe('PATCH /members/:id', () => {
    let member = {};

    beforeEach(async () => {
      const member3 = new Members(member3Data);
      member = await member3.save();
    });

    it('should update member name', async () => {
      const newData = 'Daisy';
      const response = await request(server).patch(`/members/${member._id}`).send({ name: newData });
      expect(response.status).to.equal(200);
      const newMemberData = { ...member._doc, name: newData };
      assertMember(response.body, newMemberData);
    });

    it('should update member age', async () => {
      const newData = 30;
      const response = await request(server).patch(`/members/${member._id}`).send({ age: newData });
      expect(response.status).to.equal(200);
      const newMemberData = { ...member._doc, age: newData };
      assertMember(response.body, newMemberData);
    });

    it('should update member species', async () => {
      const newData = 'Koopa';
      const response = await request(server).patch(`/members/${member._id}`).send({ species: newData });
      expect(response.status).to.equal(200);
      const newMemberData = { ...member._doc, species: newData };
      assertMember(response.body, newMemberData);
    });

    it('should update member description', async () => {
      const newData = 'Test description';
      const response = await request(server).patch(`/members/${member._id}`).send({ description: newData });
      expect(response.status).to.equal(200);
      const newMemberData = { ...member._doc, description: newData };
      assertMember(response.body, newMemberData);
    });

    it('should update member image', async () => {
      const newData = 'https://ssb.wiki.gallery/images/thumb/7/71/Bowser.png/1200px-Bowser.png';
      const response = await request(server).patch(`/members/${member._id}`).send({ image: newData });
      expect(response.status).to.equal(200);
      const newMemberData = { ...member._doc, image: newData };
      assertMember(response.body, newMemberData);
    });

    afterEach(async () => {
      await Members.deleteMany({});
    });
  });

  after(async () => {
		await Members.deleteMany({});
	});

  describe('DELETE /members/:id', () => {
    it('should delete member with the given id', async () => {
      const member3 = new Members(member3Data);
      const member = await member3.save();
      const response = await request(server).delete(`/members/${member._id}`);
      expect(response.status).to.equal(204);

      const response2 = await request(server).get('/members');
      expect(response2.body.length).to.equal(0);
    });

    it('should fail if id is invalid', async () => {
      const response = await request(server).delete('/members/123abc');
      expect(response.status).to.equal(404);
    });
  });

  describe('DELETE /members', () => {
    it('should delete all members', async () => {
      const response = await request(server).delete('/members');
      expect(response.status).to.equal(204);

      const response2 = await request(server).get('/members');
      expect(response2.body.length).to.equal(0);
    });
  });
});

function assertMember(member, memberData) {
	const keys = ['name', 'age', 'species', 'description', 'image'];

  expect(member).to.have.property('_id');

	for (const key of keys) {
		expect(member[key]).to.eql(memberData[key]);
	}
}