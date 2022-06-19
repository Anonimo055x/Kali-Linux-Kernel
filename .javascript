<VirtualBox xmlns="http://www.virtualbox.org/" version="1.16-windows">
  <Machine uuid="{af0545f4-ba91-4944-a2ec-f651500ac606}" name="Kali Linux Kernel" OSType="Debian_64" snapshotFolder="Snapshots" lastStateChange="2022-03-30T16:21:30Z">
    <MediaRegistry>
      <HardDisks>
        <HardDisk uuid="{5ae2fac0-05df-41b8-9b1e-64fb7ae03b91}" location="Kali Linux Kernel_1.vdi" format="VDI" type="Normal"/>
        <HardDisk uuid="{7e08ead9-4ee4-4dfb-9143-82d77119cf82}" location="Kali Linux Kernel_2.vdi" format="VDI" type="Normal"/>
        <HardDisk uuid="{f887e822-e4ef-4231-a496-00cbe20f313f}" location="Kali Linux Kernel_3.vdi" format="VDI" type="Normal"/>
      </HardDisks>
    </MediaRegistry>
    <ExtraData>
      <ExtraDataItem name="GUI/LastCloseAction" value="PowerOff"/>
      <ExtraDataItem name="GUI/LastGuestSizeHint" value="1920,928"/>
      <ExtraDataItem name="GUI/LastNormalWindowPosition" value="0,17,960,500,max"/>
    </ExtraData>
    <Hardware>
      <CPU count="4">
        <PAE enabled="false"/>
        <LongMode enabled="true"/>
        <X2APIC enabled="true"/>
        <HardwareVirtExLargePages enabled="true"/>
      </CPU>
      <Memory RAMSize="4024"/>
      <HID Pointing="USBTablet"/>
      <Display controller="VMSVGA" VRAMSize="50"/>
      <VideoCapture screens="1" file="." fps="25"/>
      <BIOS>
        <IOAPIC enabled="true"/>
        <SmbiosUuidLittleEndian enabled="true"/>
      </BIOS>
      <USB>
        <Controllers>
          <Controller name="OHCI" type="OHCI"/>
        </Controllers>
      </USB>
      <Network>
        <Adapter slot="0" enabled="true" MACAddress="0800271CB0AB" type="82540EM">
          <DisabledModes>
            <InternalNetwork name="intnet"/>
            <HostOnlyInterface name="VirtualBox Host-Only Ethernet Adapter"/>
            <NATNetwork name="NatNetwork"/>
          </DisabledModes>
          <NAT/>
        </Adapter>
      </Network>
      <AudioAdapter codec="AD1980" driver="DirectSound" enabled="true" enabledIn="false"/>
      <RTC localOrUTC="UTC"/>
      <Clipboard/>
      <GuestProperties>
        <GuestProperty name="/VirtualBox/GuestAdd/HostVerLastChecked" value="6.1.26" timestamp="1648657390674141900" flags=""/>
        <GuestProperty name="/VirtualBox/GuestAdd/Revision" value="147628" timestamp="1648657317543352300" flags=""/>
        <GuestProperty name="/VirtualBox/GuestAdd/Version" value="6.1.28" timestamp="1648657317542372701" flags=""/>
        <GuestProperty name="/VirtualBox/GuestAdd/VersionExt" value="6.1.28_Debian" timestamp="1648657317542372702" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/MAC" value="0800271CB0AB" timestamp="1648657322564517700" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/Name" value="eth0" timestamp="1648657322565492300" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/Status" value="Up" timestamp="1648657322564517701" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/V4/Broadcast" value="10.0.2.255" timestamp="1648657322563538901" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/V4/IP" value="10.0.2.15" timestamp="1648657322563538900" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/V4/Netmask" value="255.255.255.0" timestamp="1648657322563538902" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/Count" value="1" timestamp="1648670806149372100" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/LoggedInUsers" value="1" timestamp="1648657364016657000" flags="TRANSIENT, TRANSRESET"/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/LoggedInUsersList" value="kali" timestamp="1648657364014702400" flags="TRANSIENT, TRANSRESET"/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/NoLoggedInUsers" value="false" timestamp="1648657364017633900" flags="TRANSIENT, TRANSRESET"/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/Product" value="Linux" timestamp="1648657317540419800" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/Release" value="5.14.0-kali4-amd64" timestamp="1648657317541396100" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/Version" value="#1 SMP Debian 5.14.16-1kali1 (2021-11-05)" timestamp="1648657317541396101" flags=""/>
        <GuestProperty name="/VirtualBox/HostInfo/GUI/LanguageID" value="en_US" timestamp="1648670807445124600" flags="RDONLYGUEST"/>
        <GuestProperty name="/VirtualBox/HostInfo/VBoxRev" value="145957" timestamp="1648657290703428402" flags="TRANSIENT, RDONLYGUEST"/>
        <GuestProperty name="/VirtualBox/HostInfo/VBoxVer" value="6.1.26" timestamp="1648657290703428400" flags="TRANSIENT, RDONLYGUEST"/>
        <GuestProperty name="/VirtualBox/HostInfo/VBoxVerExt" value="6.1.26" timestamp="1648657290703428401" flags="TRANSIENT, RDONLYGUEST"/>
      </GuestProperties>
    </Hardware>
    <StorageControllers>
      <StorageController name="IDE" type="PIIX4" PortCount="2" useHostIOCache="true" Bootable="true">
        <AttachedDevice type="HardDisk" hotpluggable="false" port="0" device="0">
          <Image uuid="{df69c25d-e75d-4fb9-a688-e530b1bd41dc}"/>
        </AttachedDevice>
        <AttachedDevice type="HardDisk" hotpluggable="false" port="0" device="1">
          <Image uuid="{5ae2fac0-05df-41b8-9b1e-64fb7ae03b91}"/>
        </AttachedDevice>
        <AttachedDevice type="HardDisk" hotpluggable="false" port="1" device="0">
          <Image uuid="{7e08ead9-4ee4-4dfb-9143-82d77119cf82}"/>
        </AttachedDevice>
        <AttachedDevice type="HardDisk" hotpluggable="false" port="1" device="1">
          <Image uuid="{f887e822-e4ef-4231-a496-00cbe20f313f}"/>
        </AttachedDevice>
      </StorageController>
      <StorageController name="SATA" type="AHCI" PortCount="3" useHostIOCache="false" Bootable="true" IDE0MasterEmulationPort="0" IDE0SlaveEmulationPort="1" IDE1MasterEmulationPort="2" IDE1SlaveEmulationPort="3">
        <AttachedDevice type="HardDisk" hotpluggable="false" port="0" device="0">
          <Image uuid="{0c093f9f-8f27-4034-867a-60188fcf35cb}"/>
        </AttachedDevice>
      </StorageController>
    </StorageControllers>
  </Machine>
</VirtualBox>
