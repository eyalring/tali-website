export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200">
          <p>© {currentYear} כל הזכויות שמורות | ד&quot;ר טלי סופרין רינגולד</p>
        </div>
      </div>
    </footer>
  );
}
