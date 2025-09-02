
interface FooterProps {
  t: {
    copy: string;
  };
}

export const Footer = ({t}: FooterProps) => {
    return (
      <footer className="py-8 px-4 md:px-6 bg-gray-800 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-sm text-center">
              {t.copy}
            </p>
          </div>
        </div>
      </footer>
    );
  };
  