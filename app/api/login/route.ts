import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../firebase/firebaseConfig";
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const token = await user.getIdToken();
    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
