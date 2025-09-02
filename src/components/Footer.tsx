
interface FooterProps {
  t: {
    copy: string;
    address: string;
  };
}

export const Footer = ({t}: FooterProps) => {
    return (
      <footer className="py-8 px-4 md:px-6 bg-gray-800 text-center">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-gray-400 text-sm">
              {t.copy}
            </p>
            <p className="text-gray-400 text-sm">
              {t.address}
            </p>
          </div>
        </div>
      </footer>
    );
  };
  