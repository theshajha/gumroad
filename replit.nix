{ pkgs }: {
  deps = [
    pkgs.lsof
    pkgs.ruby_3_3
    pkgs.rubyPackages_3_3.solargraph
    pkgs.libyaml
    pkgs.sqlite
    pkgs.yarn
  ];
}