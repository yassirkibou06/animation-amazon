// app/layout.js
import './globals.css';
import Loading from './loading';

export const metadata = {
  title: 'Amazon',
  description: 'Amazon Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-hauora" >
        <Loading all={children} />
      </body>
    </html>
  );
}
