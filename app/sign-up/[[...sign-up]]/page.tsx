import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
      return (
            <main className="flex items-center justify-center mt-10">
                  <SignUp
                        appearance={{
                              variables: {
                                    colorPrimary: "#6366F1",
                                    colorBackground: "#F0F4FF",
                                    colorInputBackground: "#FFFFFF",
                                    colorInputText: "#1E293B",
                                    colorText: "#0F172A",
                                    colorTextSecondary: "#64748B",
                                    colorSuccess: "#10B981",
                                    colorDanger: "#EF4444",
                                    colorWarning: "#F59E0B",
                                    borderRadius: "0.75rem",
                              },
                        }}
                  />
            </main>
      );
}
