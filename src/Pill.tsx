import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

// Perhaps truncate in the middle of the pills
// http://jsfiddle.net/odj284x0/

const Pill = ({ children }: { children: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const ro = useRef<ResizeObserver>();
  const [truncate, setTruncate] = useState(false);
  const handleResize = (entries: ResizeObserverEntry[]) => {
    // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
    // to avoid overloading the observer
    window.requestAnimationFrame(() => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }
      checkTruncate();
    });

  }

  const checkTruncate = () => {

    if (ref.current) {
      const truncate = ref.current.offsetWidth < ref.current.scrollWidth;
      setTruncate(truncate);
    }
  }

  useEffect(() => {
    if (!ro.current) {
      ro.current = new ResizeObserver(handleResize);
    }
    if (ro.current && ref.current) {
      ro.current.observe(ref.current);
    }
    return () => {
      if (ro.current && ref.current) {
        ro.current.unobserve(ref.current)
      }
    }
  }, [ref.current, ro.current]);

  return <Container
    ref={ref}
    onMouseOver={() => setTruncate(false)}
    onMouseOut={() => checkTruncate()}
    truncate={truncate}
    content={children}>{children}</Container>;
}

type Truncated = {
  truncate: boolean;
  content: string;
}

const Container = styled.div<Truncated>`
  background-color: #333;
  color: whitesmoke;
  font-size: 14px;
  display: inline-block;
  padding: 3px;
  border-radius: 4px;
  margin: 0 4px 4px 0;
  white-space: nowrap;
  text-overflow: ellipsis;  
  cursor: pointer;
  overflow: hidden;
  :hover {
    background-color: #000;
  }
  ${(props) => {
    return props.truncate && `
    :before {
      float: right;
      content: "${props.content.slice(props.content.length - 20)}";
    }
    `;
  }}
`;

export {
  Pill
}