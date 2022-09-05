import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector: string;
  children: React.ReactNode;
}

const ClientOnlyPortal: React.FC<Props> = ({ selector, children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
};

export default ClientOnlyPortal;
