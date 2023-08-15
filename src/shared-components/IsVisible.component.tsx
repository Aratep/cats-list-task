export const IsVisible = ({
  children,
  isVisible,
}: {
  children: any;
  isVisible: boolean;
}) => (isVisible ? children : null);
