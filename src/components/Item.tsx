export default function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-between py-4 border-b border-custom-rose-100">
      {children}
    </div>
  );
}
