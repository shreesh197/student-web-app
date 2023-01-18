import { Drawer } from "antd";
import { useState } from "react";
import AppFooter from "../footer";
import AppHeader from "../header";
import SideDrawer from "../side-navigation";

const RootLayout = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppHeader setOpen={setOpen} />
      {props.children}
      <AppFooter />
      <SideDrawer open={open} setOpen={setOpen}>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Ea atque molestias sed obcaecati iusto 33
          tenetur accusantium rem velit inventore quo sint quia sit nihil
          possimus nam internos esse. Et laudantium repellat aut eius possimus
          ad galisum modi aut omnis nulla et quia consequatur. Ut facilis illo
          quo facilis corporis a omnis commodi ea Quis deleniti. Ea sint
          voluptatibus ea porro voluptatem et explicabo officia. Est minus enim
          et quas asperiores cum quidem quidem nam voluptatem animi qui
          perferendis aliquam 33 voluptas ducimus est modi itaque. Ab quaerat
          unde sit consequuntur maxime ut tempore officia et earum quia et odio
          officiis aut maiores animi. Et deserunt nemo in voluptatem provident
          et quos dicta eos beatae delectus. Et sint placeat ut pariatur dolor
          ut quasi repudiandae.
        </p>
      </SideDrawer>
    </>
  );
};

export default RootLayout;
