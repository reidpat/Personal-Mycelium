<script>
	import NavbarMenuItems from "./NavbarMenuItems.svelte";

</script>
<div class="navbar bg-base-300 z-10" >
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <NavbarMenuItems />
        </ul>
      </div>
      <a href="/" class="btn btn-ghost text-xl">RP's Mycelium</a>
    </div>
    <div class="navbar-center hidden lg:flex z-10">
      <ul class="menu menu-horizontal px-1">
        <NavbarMenuItems />
      </ul>
    </div>
    <div class="navbar-end">
      <a href="/new-log" class="btn btn-primary">New Log</a>
    </div>
  </div>