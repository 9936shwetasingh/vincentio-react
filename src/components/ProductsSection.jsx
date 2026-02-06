const ProductSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-20">
          Products
        </h2>

        {/* FIRST ROW */}
        <div className="grid md:grid-cols-4 gap-20 text-center">

          {/* VnetMox */}
          <a href="/products/vnetmox" className="group inline-block">
            <img
              src="/images/Vnetmox.png"
              alt="VnetMox"
              className="mx-auto mb-6 h-20 transition-all duration-300
                         group-hover:scale-110 group-hover:-translate-y-1"
            />
            <h3
              className="text-lg font-medium text-black mb-2
                         inline-block relative
                         after:content-[''] after:block after:h-[2px]
                         after:w-0 after:bg-blue-600 after:transition-all after:duration-300
                         group-hover:after:w-full"
            >
              VnetMox
            </h3>
            <p className="text-sm text-blue-600">
              Powerful Virtualization Platform
            </p>
          </a>

          {/* VnetBackup */}
          <a
            href="https://vincentio.in/products/backup-restore/vnetbackup/"
            target="_blank"
            className="group inline-block"
          >
            <img
              src="/images/backup.png"
              alt="VnetBackup"
              className="mx-auto mb-6 h-20 transition-all duration-300
                         group-hover:scale-110 group-hover:-translate-y-1"
            />
            <h3
              className="text-lg font-medium text-black mb-2
                         inline-block relative
                         after:content-[''] after:block after:h-[2px]
                         after:w-0 after:bg-blue-600 after:transition-all after:duration-300
                         group-hover:after:w-full"
            >
              VnetBackup
            </h3>
            <p className="text-sm text-blue-600">
              Backup Archiving Restore Manager
            </p>
          </a>

          {/* VnetNAS */}
          <a
            href="https://vincentio.in/products/storage/vnet-nas/"
            target="_blank"
            className="group inline-block"
          >
            <img
              src="/images/NAS.png"
              alt="VnetNAS"
              className="mx-auto mb-6 h-20 transition-all duration-300
                         group-hover:scale-110 group-hover:-translate-y-1"
            />
            <h3
              className="text-lg font-medium text-black mb-2
                         inline-block relative
                         after:content-[''] after:block after:h-[2px]
                         after:w-0 after:bg-blue-600 after:transition-all after:duration-300
                         group-hover:after:w-full"
            >
              VnetNAS
            </h3>
            <p className="text-sm text-blue-600">
              Enterprise Grade Unified NAS Storage
            </p>
          </a>

          {/* VnetStor */}
          <a
            href="https://vincentio.in/products/storage/vnetstor/"
            target="_blank"
            className="group inline-block"
          >
            <img
              src="/images/stor.png"
              alt="VnetStor"
              className="mx-auto mb-6 h-20 transition-all duration-300
                         group-hover:scale-110 group-hover:-translate-y-1"
            />
            <h3
              className="text-lg font-medium text-black mb-2
                         inline-block relative
                         after:content-[''] after:block after:h-[2px]
                         after:w-0 after:bg-blue-600 after:transition-all after:duration-300
                         group-hover:after:w-full"
            >
              VnetStor
            </h3>
            <p className="text-sm text-blue-600">
              Distributed & Highly Scalable Storage Solution
            </p>
          </a>
        </div>

        {/* SECOND ROW */}
        <div className="mt-20 flex justify-center">
          <a href="/products/vnetwall" className="group inline-block text-center">
            <img
              src="/images/wall.png"
              alt="VnetWall"
              className="mx-auto mb-6 h-20 transition-all duration-300
                         group-hover:scale-110 group-hover:-translate-y-1"
            />
            <h3
              className="text-lg font-medium text-black mb-2
                         inline-block relative
                         after:content-[''] after:block after:h-[2px]
                         after:w-0 after:bg-blue-600 after:transition-all after:duration-300
                         group-hover:after:w-full"
            >
              VnetWall
            </h3>
            <p className="text-sm text-blue-600">
              Robust & True Security Platform
            </p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
