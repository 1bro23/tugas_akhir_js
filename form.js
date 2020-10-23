function buat_login(){
  let a=document.getElementById("X");
  a.remove();
  let p=document.createElement("p");
  p.innerHTML="SILAHKAN MENDAFTAR";
  p.className="tulisan_login";
  let div=document.getElementsByTagName("div")[0];
  div.appendChild(p);

  let form=document.createElement("form");
  div.appendChild(form);
  let f=document.getElementsByTagName("form")[0];

  let data_nama=document.createElement("label");
  let input_nama=document.createElement("input");
  data_nama.innerHTML="Nama User";
  f.appendChild(data_nama);
  input_nama.className="form_login";
  input_nama.placeholder="Nama User..";
  input_nama.type="text";
  f.appendChild(input_nama);

  let data_no=document.createElement("label");
  let input_no=document.createElement("input");
  data_no.innerHTML="Nomor Handphone";
  f.appendChild(data_no);
  input_no.className="form_login";
  input_no.placeholder="Nomor Handphone..";
  input_no.type="tel";
  f.appendChild(input_no);

  let data_user=document.createElement("label");
  let input_user=document.createElement("input");
  data_user.innerHTML="Username";
  f.appendChild(data_user);
  input_user.className="form_login";
  input_user.placeholder="Username atau email..";
  input_user.type="text";
  f.appendChild(input_user);

  let data_pas=document.createElement("label");
  let input_pas=document.createElement("input");
  data_pas.innerHTML="Password";
  f.appendChild(data_pas);
  input_pas.className="form_login";
  input_pas.placeholder="Password..";
  input_pas.type="password";
  f.appendChild(input_pas);

  let input_sub=document.createElement("input");
  input_sub.type="submit";
  input_sub.className="tombol_login";
  input_sub.value="DAFTAR SEKARANG";
  f.appendChild(input_sub);
}
