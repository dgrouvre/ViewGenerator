using Frs.Mpls.Public.Foundation.Orm.Models;
using Glass.Mapper.Sc.Configuration.Attributes;

namespace Frb.Mpls.Public.Feature.{Template}.Models
{
    [SitecoreType]
    public interface I{Template} : IGlassBase
    {
        [SitecoreField]
        string Title { get; set; }

    }
}