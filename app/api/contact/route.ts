import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface StoredMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  receivedAt: string;
}

const DIR = path.join(process.cwd(), 'data');
const FILE = path.join(DIR, 'messages.json');
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (![name, email, message].every((v) => typeof v === 'string' && v.trim())) {
    return fail('Please fill in your name, email and message.', 400);
  }
  const clean = {
    name: (name as string).trim().slice(0, 100),
    email: (email as string).trim().slice(0, 150),
    message: (message as string).trim().slice(0, 2000),
  };
  if (!emailRe.test(clean.email)) return fail('Enter a valid email address.', 400);
  if (clean.message.length < 10) return fail('Your message should be at least 10 characters.', 400);

  try {
    await fs.mkdir(DIR, { recursive: true });
    let messages: StoredMessage[] = [];
    try {
      messages = JSON.parse((await fs.readFile(FILE, 'utf8')) || '[]');
    } catch {
      /* first message: file does not exist yet */
    }
    messages.push({ id: Date.now(), ...clean, receivedAt: new Date().toISOString() });
    await fs.writeFile(FILE, JSON.stringify(messages, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Could not save message:', err);
    return fail('Could not save your message. Please try again.', 500);
  }
}
