import { prisma } from "@/lib/prisma"; // ✅ Make sure prisma client is correct

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(request: { json: () => any; }) {
  const data = await request.json();
  const user = await prisma.user.create({ data });
  return Response.json(user);
}
