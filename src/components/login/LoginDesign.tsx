const LoginDesign = ({
  children,
  hasAdditionalChildren,
  additionalChildren,
  margin,
  isMobile,
}: {
  children: any;
  hasAdditionalChildren: boolean;
  additionalChildren: any;
  margin: boolean;
  isMobile: boolean;
}) => {
  return (
    <>
      <div
        className="row justify-content-center"
        style={{ marginTop: margin ? "40px" : 0 }}
      >
        {!isMobile && (
          <div className="col-2 text-right my-auto pe-0">
            {hasAdditionalChildren && additionalChildren}
          </div>
        )}

        <div
          className={`${
            isMobile ? "col-12" : "col-10 my-auto col-alignment"
          } text-start`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default LoginDesign;
