/* eslint-disable no-console */
import React, { useState } from 'react';
import UserService from '../services/user';

export default function Home() {
  const [id, setId] = useState(1);
  const [name, setName] = useState('');

  async function handleFind() {
    try {
      const response = await UserService.findOne(id);
      console.log('response findOne', response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleList() {
    try {
      const response = await UserService.findAll();
      console.log('response findAll', response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreate() {
    try {
      const response = await UserService.create(name);
      console.log('response create', response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Hello, world</h1>
      <input
        value={id}
        placeholder="id"
        onChange={(e) =>
          setId(Number.isNaN(e.target.value) ? 1 : Number(e.target.value))
        }
      />
      <input
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleCreate}>
        create
      </button>
      <button type="button" onClick={handleFind}>
        find
      </button>
      <button type="button" onClick={handleList}>
        list
      </button>
    </div>
  );
}
